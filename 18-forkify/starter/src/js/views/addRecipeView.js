import icons from 'url:../../img/icons.svg'; // Parcel 2, "url" only for static asset files
import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded.';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super(); // call super because it's a child class
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
    // console.log(this._overlay);
  }

  toggleWindow() {
    console.log(this);
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)]; // weird object can be spread into array
      const data = Object.fromEntries(dataArr); // opposite of Array.entries() method.
      handler(data);
    });
  }
}

// only export class as an object

export default new AddRecipeView();
