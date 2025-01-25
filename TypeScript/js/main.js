document.addEventListener('DOMContentLoaded', () => {
    subMenuBinding();

});

// 서브메뉴 바인딩 
const subMenuBinding = () => {
    // 추가 메뉴 발생 시 여기 추가
    const subMenuList = ["Profile", "Project", "Study"];
    const subMenu = document.querySelector('.sub-menu');
    let menuItem = "";
    subMenuList.forEach((item, i) => {
        menuItem += i == 0 ? `<li class="ftw-800" onclick="subMenuClick(event)">${ item }</li>` : `<li onclick="subMenuClick(event)">${ item }</li>`; 
    });

    subMenu.innerHTML = menuItem;
    subContentHandler(subMenuList[0]);
}

// 서브메뉴 클릭 이벤트
const subMenuClick = (e) => {
    let target = e.target;
    const subMenu = document.querySelector('.sub-menu');

    if(subMenu) {
        subMenu.querySelectorAll('li').forEach(li => {
            li.classList.remove('ftw-800');
        });
    }

    target.classList.add("ftw-800");

    // 해당 메뉴 클릭시 보여줄 내용 작성
    subContentHandler(target.innerHTML);
}


// 서브메뉴 바인딩
const subContentHandler = (target) => {
    const subContent = document.querySelector('.sub-content');
    let item = "";
    switch (target) {
        case "Profile":
            item += profileContent();
            break;
        case "Project":
            item += projectContent();
            break;
        case "Study":
            item += studyContent();
            break;
        default:
            break;
    }
    subContent.innerHTML = item;
}

// Profile 내용
const profileContent = () => {
    // api data request
    // const profile = fetch('');
    const profile = {
        name : "노시온",
        tel : "010-5122-4519",
        addr : "경기도 부천시",
        avatar : "/img/profile.jpg"
    }

    return `
        <div class="profile-content">
            <div class="profile-img">
                <img src="${ profile.avatar }" alt="profile image">
            </div>
            <div class="profile-desription">
                <p>* Name : ${ profile.name }</p>
                <p>* Tel : ${ profile.tel }</p>
                <p>* Address : ${ profile.addr }</p>
            </div>
        </div>
        <div class="profile-content">
            내용
        </div>
    `
}

// Project 내용
const projectContent = () => {
    return `
        <div>
            project content
        </div>
    `
}

// Study 내용
const studyContent = () => {
    return `
        <div>
            study content
        </div>
    `
}