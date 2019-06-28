import { Component ,Input} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 title ='blog-app';
 posts = [
  {
      title: ' 1 er',
      content: 'La liaison à double sens (ou two-way binding) utilise la liaison par propriété et la liaison par événement en même temps ',
      loveIts: 0,
      created_at: new Date()
  },
  {
      title: '2eme ',
      content: 'Pour pouvoir utiliser le two-way binding, il vous faut importer  FormsModule  depuis  @angular/forms  dans votre application.  Vous pouvez accomplir cela en l ajoutant à l array  imports  de votre  AppModule ',
      loveIts: 0,
      created_at: new Date()
  },
  {
      title: 'Autre ',
      content: 'Le two-way binding emploie le mélange des syntaxes de property binding et d event binding : des crochets et des parenthèses  [()] ',
      loveIts: 0,
      created_at: new Date()
  }
];
}

