function upDate(previewPic) {
    console.log("Наведение на:", previewPic.src);
    console.log("Текст:", previewPic.alt);

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Мышь ушла или потеряно фокусное состояние.");

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Наведи курсор или используй клавиатуру для просмотра";
}

function initializeGallery() {
    console.log("Галерея загружена, добавляем tabindex и обработчики событий.");

    let images = document.querySelectorAll(".preview");

    for (let img of images) {
        img.addEventListener("mouseover", function() { upDate(this); });
        img.addEventListener("mouseout", undo);
        img.addEventListener("focus", function() { upDate(this); });
        img.addEventListener("blur", undo);
        img.setAttribute("tabindex", "0"); 
    }
}
