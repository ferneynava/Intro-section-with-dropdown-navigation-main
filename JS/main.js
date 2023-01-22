const features = document.querySelector(".features")
const company =  document.querySelector(".company")
const Asidefeatures = document.querySelector("#featuresAside")
const Asidecompany = document.querySelector("#companyAside")


features.addEventListener("click", toggleFeatures)
company.addEventListener("click", toggleCompany)

function toggleFeatures(){
    let inactiveFeatures = Asidefeatures.classList.contains("inactive") // true esta // false no esta
    if(inactiveFeatures){
        Asidefeatures.classList.remove("inactive")
    } else {
        Asidefeatures.classList.add("inactive")
    }
}

function toggleCompany(){
    let inactiveCompany = Asidecompany.classList.contains("inactive") 

    if(inactiveCompany) {
        Asidecompany.classList.remove("inactive")
    }else{
        Asidecompany.classList.add("inactive")
    }
}