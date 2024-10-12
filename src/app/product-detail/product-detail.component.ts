import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  constructor(
    private elementref: ElementRef,
    
  ){
    // this.isBorderedd = new Array(this.images.length).fill(false);
  }

  images = [
    { imageUrl: 'assets/images/w1.jpg', },
    { imageUrl: 'assets/images/w2.jpg', },
    { imageUrl: 'assets/images/w3.jpg', },
    { imageUrl: 'assets/images/w4.jpg',},
    { imageUrl: 'assets/images/w5.jpg',},
    { imageUrl: 'assets/images/w6.jpg',},
  ];

  index:number = 0;
  open = false;

selectedImage: string = '';
// isBorderedd: number = -1; // Variable to store selected image URL

select(i:number){
  this.index=i;
}

// Function to set selected image

// selectImage(imageUrl: string, index: number) {
//   this.selectedImage = imageUrl;
//   this.isBorderedd = index;
// }

// getImg(index: number) {
//   return this.isBorderedd === index
//   ? { 'border': '3px solid red' }   
//   : { 'border': 'none' };
// }

  // Automatically select the first image on component initialization
  ngOnInit() {
    if (this.images.length > 0) {
      this.selectedImage = this.images[0].imageUrl;
    }
  }

  leftArrow(){
    this.index--
    if(this.index == -1){
      this.index = this.images.length-1
    }


    // if(this.index > 0){
    //   this.index--
    // }else{
    //   this.index = this.images.length-1;
    // }
  }

  // rightArrow(){
  //   if(this.index == this.images.length){
  //     this.index++
  //   }else{
  //     this.index = 0;
  //   }
  // }

  rightArrow(){
    this.index++
    if(this.index == this.images.length){
      this.index = 0;
    }
  }
 
}

// leftArrow(){
//   if(this.index > 0){
//   this.index--
//   }else{
//     this.index = this.images.length-1
//   }
// }

// rightArrow(){
// if(this.index < this.images.length-1){
  
//   this.index = 0
// }else{
  
// }
