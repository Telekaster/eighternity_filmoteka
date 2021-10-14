import template from '../templates/modal-footer.hbs';
console.log(template);
import team from '../data/footer-team.json';
console.log(team);

const teamList = document.querySelector('.team-list');
console.log(teamList);

const cardsMarkup = createTeamMarkup(team);
teamList.insertAdjacentHTML('beforeend', cardsMarkup);

function createTeamMarkup(team) {
  //   return team.map(person => template(person)).join('');
  return team.map(template).join('');
}
