import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import * as Styles from './pages/styles';

const pages = {
  nav: [Pages.NavigatePage],
  login: [Pages.LoginPage, { styles: Styles.stylesLogin }],
  signin: [Pages.SigninPage, { styles: Styles.stylesSignin }],
  chat: [Pages.ChatPage, { styles: Styles.stylesChat }],
  profile: [Pages.ProfilePage, { styles: Styles.stylesProfile }],
  clientError: [Pages.ClientErrorPage],
  serverError: [Pages.ServerErrorPage],
};

// компоненты
Object.entries(Components).forEach(([name, template]) => {
  Handlebars.registerPartial(name, template);
});

// навигация по страницам
function navigate(page: string) {
  //@ts-ignore
  const [source, context = {}] = pages[page];

  const container = document.getElementById('app')!;
  const templatingFunction = Handlebars.compile(source);

  container.innerHTML = templatingFunction(context);
}
document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', (e) => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
