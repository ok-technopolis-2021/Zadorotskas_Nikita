function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function createSkill(skillName, skillPointer) {
    const skillDiv = document.createElement('div');

    skillDiv.classList.add('skill__info');
    skillDiv.innerHTML =
    `   <div class="skill__delete">
            <button class="skill__delete-button"> - </button>
        </div>
        <div class="skill__name">
            ${skillName}
        </div>
        <div class="skill__bar">
            <div class="skill__level" style="width: ${skillPointer}%;"> </div>
        </div>`

    skillDiv.getElementsByClassName("skill__delete-button").item(0).addEventListener('click', () => {
        skillDiv.remove();
    })
    document.getElementsByClassName("skills__list").item(0).appendChild(skillDiv);
}

function addSkill() {
    let name = document.getElementById("skillName").value;
    let level = document.getElementById("skillPointer").value;

    if (name === "" || level === "" || level < 0 || level > 100) {
        alert("Incorrect input!");
        return;
    }

    name = replaceAll(name, '>', '&gt');
    name = replaceAll(name, '<', '&lt');

    createSkill(name, level);
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("skill-form").addEventListener('submit', (e) => {
        e.preventDefault();
        addSkill();
    });
});

/*  default skills  */

createSkill('JavaScript', 15);
createSkill('Java', 80);
createSkill('KOTLIN!!1!', 70);
createSkill('Поедание пельменей', 100);