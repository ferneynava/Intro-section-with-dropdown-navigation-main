const features = document.querySelector(".features")
const company =  document.querySelector(".company")
const featuresMobile = document.querySelector(".featuresMobile")
const companyMobile = document.querySelector(".companyMobile")
const Asidefeatures = document.querySelector("#featuresAside")
const Asidecompany = document.querySelector("#companyAside")
const AsidefeaturesMobile = document.querySelector("#featuresAsideMobile")
const AsidecompanyMobile = document.querySelector("#companyAsideMobile")
const menuMobile = document.querySelector(".navbar-right-mobile")
const desplegarMenuMobile = document.querySelector("#menuMobile")
const openMenuHamburguesa = document.querySelector("#menuHamburguesa")
const closeMenu  = document.querySelector("#closeMenu")
const arrowDownFe = document.querySelector("#arrowDownFe") 
const arrowUpFe = document.querySelector("#arrowUpFe")
const arrowDownCo = document.querySelector("#arrowDownCo") 
const arrowUpCo = document.querySelector("#arrowUpCo")
const arrowDownFeMobil = document.querySelector("#arrowDownFeMobil") 
const arrowUpFeMobil = document.querySelector("#arrowUpFeMobil")
const arrowDownCoMobil = document.querySelector("#arrowDownCoMobil")
const arrowUpCoMobil = document.querySelector("#arrowUpCoMobil")

features.addEventListener("click", toggleFeatures)
company.addEventListener("click", toggleCompany)
menuMobile.addEventListener("click", toggleMenuMobile)
featuresMobile.addEventListener("click", toggleFeaturesMobile)
companyMobile.addEventListener("click", toggleCompanyMobile)

function toggleFeatures(){
    let inactiveFeatures = Asidefeatures.classList.contains("inactive") // true esta // false no esta
    if(inactiveFeatures){
        Asidefeatures.classList.remove("inactive")
        arrowUpFe.classList.remove("inactive")
        arrowDownFe.classList.add("inactive")
    } else {
        Asidefeatures.classList.add("inactive")
        arrowDownFe.classList.remove("inactive")
        arrowUpFe.classList.add("inactive")
    }
}

function toggleCompany(){
    let inactiveCompany = Asidecompany.classList.contains("inactive") 

    if(inactiveCompany) {
        Asidecompany.classList.remove("inactive")
        arrowUpCo.classList.remove("inactive")
        arrowDownCo.classList.add("inactive")
    }else{
        Asidecompany.classList.add("inactive")
        arrowDownCo.classList.remove("inactive")
        arrowUpCo.classList.add("inactive")
    }
}

function toggleMenuMobile(){
    let inactiveMenuMobile = desplegarMenuMobile.classList.contains("hidden")
    
    if(inactiveMenuMobile){
        
        desplegarMenuMobile.classList.remove("hidden")
        openMenuHamburguesa.classList.add("hidden")
        closeMenu.classList.remove("hidden")
    } else {
        desplegarMenuMobile.classList.add("hidden")
        closeMenu.classList.add("hidden")
        openMenuHamburguesa.classList.remove("hidden")
    }
}

function toggleFeaturesMobile(){
    let inactiveFeaturesMobile = AsidefeaturesMobile.classList.contains("inactive")

    if(inactiveFeaturesMobile) {
        AsidefeaturesMobile.classList.remove("inactive")
        arrowUpFeMobil.classList.remove("inactive")
        arrowDownFeMobil.classList.add("inactive")
    } else {
        AsidefeaturesMobile.classList.add("inactive")
        arrowDownFeMobil.classList.remove("inactive")
        arrowUpFeMobil.classList.add("inactive")
    }
}

function toggleCompanyMobile(){
    let inactiveCompanyMobile = AsidecompanyMobile.classList.contains("inactive")

    if(inactiveCompanyMobile) {
        AsidecompanyMobile.classList.remove("inactive")
        arrowUpCoMobil.classList.remove("inactive")
        arrowDownCoMobil.classList.add("inactive")
    } else {
        AsidecompanyMobile.classList.add("inactive")
        arrowDownCoMobil.classList.remove("inactive")
        arrowUpCoMobil.classList.add("inactive")
    }
}

