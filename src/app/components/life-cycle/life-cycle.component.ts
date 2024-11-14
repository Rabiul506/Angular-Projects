import { NgIf } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TabContainerComponent } from "../tab-container/tab-container.component";

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [NgIf, TabContainerComponent],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class  LifeCycleComponent implements OnInit,
OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() userId: string = '';
    user: any;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes);
    }

    ngOnInit() {
        console.log('ngOnInit');
        // Simulate fetching user data
        this.user = { name: 'John Doe', email: 'john.doe@example.com' };
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    // ng template, ng container, ngTemplateOutlet 
    loginText = 'Login';
    signUpText = 'Sign Up'; 
    lessons = ['Lesson 1', 'Lessons 2'];

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
    }
}