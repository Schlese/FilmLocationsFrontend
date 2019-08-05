import {Component, OnInit, ViewChild} from '@angular/core';
import {FilmLocationService} from '../../services/film-location.service';
import {FilmLocation} from '../../model/FilmLocation';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-film-location-list',
  templateUrl: './film-location-list.component.html',
  styleUrls: ['./film-location-list.component.css']
})
export class FilmLocationListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'locations'];
  dataSource = new MatTableDataSource<FilmLocation>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private filmLocationService: FilmLocationService) { }

  ngOnInit() {
    this.getFilmLocations();
    this.dataSource.paginator = this.paginator;
  }

  getFilmLocations(): void {
    this.filmLocationService.getFilmLocations().subscribe(response => {
      if (response.filmLocations !== null) {
        this.dataSource.data = response.filmLocations;
      }
    });
  }

  applySearch(filterValue: string) {
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.searchFilmLocations(filterValue.trim());
  }

  searchFilmLocations(title: string): void {
    this.filmLocationService.searchFilmLocationsByTitle(title).subscribe(response => {
      if (response.filmLocations !== null) {
        this.dataSource.data = response.filmLocations;
      }
    });
  }
}

