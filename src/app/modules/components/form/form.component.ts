import { Category } from 'src/app/shared/models/category';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/shared/models/status';
import { Router } from '@angular/router';
import { DancesService } from '../../services/dances.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    addForm: FormGroup;
    categories: Category[] = Category.getAllCategories();
    constructor(private formBuilder: FormBuilder, private dancesService: DancesService, private router: Router) { }

    ngOnInit() {
        this.addForm = this.formBuilder.group({

            title: ['', Validators.required],
            price: [0, [Validators.required, Validators.min(0)]],
            image: ['', Validators.required, Validators.maxLength(255)],
            name: ['', Validators.required],
            phone: ['', Validators.required, Validators.maxLength(9)],
            address: ['', Validators.required],
            rank: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
            type: ['', Validators.required],
            description: ['', Validators.required, Validators.maxLength(255)],
            categories: [[], Validators.required],
            date: new Date().toISOString(),
            status: Status.AKTIV
        });
    }
    onSubmit() {
        console.log(this.addForm.value);
        this.dancesService.saveDance(this.addForm.value);
        this.router.navigateByUrl("/dances/overview");
    }
} 