const ContainerE1 = document.querySelector(".container");
const btnE1 = document.querySelector(".btn");
const PopupContainerE1 = document.querySelector(".popupcontainer");
const CloseIconE1 = document.querySelector(".close-icon");

btnE1.addEventListener("click", ()=>{
    ContainerE1.classList.add("active");
    PopupContainerE1.classList.remove("active");
});
CloseIconE1.addEventListener("click", ()=>{
    ContainerE1.classList.remove("active");
    PopupContainerE1.classList.add("active");

})