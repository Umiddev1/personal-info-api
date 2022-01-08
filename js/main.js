let elInfoList = document.querySelector('.info__list');
let elModal = document.querySelector('.modal-bg');
let elModalImg = document.querySelector('.modal__img');
let elModalClose = document.querySelector('.modal-close');
console.log(elModal);
fetch('https://reqres.in/api/users')
.then(function(data) {
  return data;
}).then((e) => {
  return e.json()
}).then((item) => {
  let obj = item.data;
  console.log(obj);
  for(let i of obj) {
    let elItem = document.createElement('li');
    elItem.className = "info__item col-xs-12 col-sm-6 col-md-4";
    let close = document.createElement('i');
    close.className = "close bx bx-x";
    close.style.cursor = "pointer";
    let elDiv = document.createElement('div');
    elDiv.className = "info__inner";
    let elAvaDiv = document.createElement('div');
    elAvaDiv.className = "info__avatar";
    let elImg = document.createElement('img');
    elImg.className = "info__img";
    elImg.src = i.avatar;
    let elNamesDiv = document.createElement('div');
    elNamesDiv.className = "info__names";
    let h4 = document.createElement('h4');
    h4.className = "info__name";
    h4.innerHTML = `${i.first_name}`
    let elFullName = document.createElement('span');
    let elLists = document.createElement('ul');
    elLists.className = "info__inner-list";
    let elInnerItem = document.createElement('li');
    elInnerItem.className = "info__inner-item";
    let p = document.createElement('p');
    p.className = "info__inner-company tex";
    p.innerHTML = "EMAIL";
    let elLinkEmail = document.createElement('a');
    elLinkEmail.className = "info__inner-email link"
    elLinkEmail.href = "#"
    elLinkEmail.innerHTML = `${i.email}`
    elInnerItem.appendChild(p);
    elInnerItem.appendChild(elLinkEmail);
    elLists.appendChild(elInnerItem);
    elFullName.className = "info__fullname";
    elFullName.innerHTML = `${i.first_name} ${i.last_name}`;
    elNamesDiv.appendChild(h4);
    elNamesDiv.appendChild(elFullName)
    elAvaDiv.appendChild(elImg);
    elAvaDiv.appendChild(elNamesDiv);
    elDiv.appendChild(elAvaDiv);
    elDiv.appendChild(elLists);
    elItem.appendChild(elDiv);
    elItem.appendChild(close)
    elInfoList.appendChild(elItem);
    elImg.addEventListener("click", (e) => {
      if(e.target.classList.contains('info__img')) {
        elModal.classList.add('active');
        elModalImg.src = e.target.src;
      }
    })
    elModalClose.addEventListener("click", (e) => {
        elModal.classList.remove('active');
    })
    close.addEventListener("click", (e) => {
      // console.log(e.target.parentElement);
      elInfoList.removeChild(e.target.parentElement);
    })
  }
})

// let elClose = document.querySelector('.close');
// elClose.addEventListener("click", (e) => {
//    e.target.parentElement.parentElement.style.display = "none";
// })