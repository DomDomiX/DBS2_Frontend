import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input'; 
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ModelsAuthor } from '../app/api/models';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthorManagementService } from '../app/api/services/author-management.service';
import { AuthorService } from '../app/api/services/author.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authors',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
  providers: [provideNativeDateAdapter()],
})
export class AuthorsComponent implements OnInit {
  authors: ModelsAuthor[] = [];
  showAuthorForm = false;
  editingAuthorId: number | null = null;

  //input pro autora
  birth = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  
  constructor(private authorManagementService: AuthorManagementService, private authorService: AuthorService) { }
  
  ngOnInit(): void {
    this.loadAuthors();
  }

  resetForm() {
    this.firstName.reset();
    this.lastName.reset();
    this.lastName.reset();
  }

  // Načtení autorů
  loadAuthors() {
    this.authorService.getAllAuthors().subscribe({
      next: (v) => {
        // Přiřazení uživatelů do proměnné
        this.authors = v;
      },
      error: (e) => {
        console.error(e);
        alert(JSON.stringify(e));
      },
      complete: () => { }
    });
  }

  // Vytvoření autora
  createAuthor() {
    this.authorManagementService.createAuthor({ body: {
      birth: this.birth.value!,
      firstName: this.firstName.value!,
      lastName: this.lastName.value!
    } }).subscribe({
      next: (v) => {
        this.loadAuthors();
      },
      error: (e) => {
        console.error(e);
        alert(JSON.stringify(e));
        this.showAuthorForm = false;
      },
      complete: () => {
        this.showAuthorForm = false;
      }
    });
  }

  deleteAuthor(authorId: number) {
    if (!confirm('Opravdu chceš autora smazat?')) return;
      this.authorManagementService.deleteAuthor({ id: authorId }).subscribe({
        next: () => {
          this.loadAuthors(); // Aktualizuj seznam
        },
        error: (e) => {
          console.error(e);
          alert('Chyba při mazání autora.');
        }
      });
  }
}
