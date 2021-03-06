import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  selectedCategory!: Category;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category): void {
    this.selectedCategory = category;
    this.dataHandler.fillTasksByCategory(category)
  }
}
