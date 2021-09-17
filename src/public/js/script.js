console.log('js work')

const education = {
    'Среднее профессиональное': ['1996', '1997', '1998'],
    'Среднее специальное': ['1992', '1993', '1994'],
    'Неоконченное высшее': ['2000', '2001', '2002'],
    'Высшее': ['2005', '2006', '2007'],
};

const newArrEducation = Object.entries(education)
console.log(newArrEducation)

for (let [key, value] of newArrEducation) {
    const newEducation = document.createElement('li')
    newEducation.classList.add('educational-institution')
    newEducation.classList.add('educational-name')
    newEducation.innerText = key
    const $educationList = document.querySelector('#education-list')
    $educationList.appendChild(newEducation)
    const titleInstution = document.querySelector('.educational-institution.title')
    $educationList.addEventListener('click', (event) => {
        if (event.target.classList.contains('educational-name')) {
            const institutionName = event.target.innerText
            titleInstution.innerText = institutionName
            $educationList.classList.add('hide')
            $openInstitution.classList.add('close')
        }
        if (key === titleInstution.innerText) {
            const $yearList = document.querySelector('#year-list')
            $yearList.innerHTML = '';
            value.forEach(el => {
                const newYears = document.createElement('li')
                newYears.classList.add('educational-institution')
                newYears.classList.add('years')
                newYears.innerText = el
                $yearList.appendChild(newYears)
            })
            console.log('current >>>', value)
        }
    })
    if (key === titleInstution.innerText) {
        const $yearList = document.querySelector('#year-list')
        value.forEach(el => {
            const newYears = document.createElement('li')
            newYears.classList.add('educational-institution')
            newYears.classList.add('years')
            newYears.innerText = el
            $yearList.appendChild(newYears)
        })
    }
}

const $openInstitution = document.querySelector('.arrom-botton.institution')
const $educationList = document.querySelector('#education-list')

$openInstitution.addEventListener('click', (event) => {
    if ($educationList.classList.contains('hide')) {
        $educationList.classList.remove('hide')
    } else {
        $educationList.classList.add('hide')
    }
    
    if ($openInstitution.classList.contains('close')) {
        $openInstitution.classList.remove('close')
    } else {
        $openInstitution.classList.add('close')
    }
})

const $openYears = document.querySelector('.arrom-botton.years')

$openYears.addEventListener('click', (event) => {
    if ($yearList.classList.contains('hide')) {
        $yearList.classList.remove('hide')
    } else {
        $yearList.classList.add('hide')
    }
    
    if ($openYears.classList.contains('close')) {
        $openYears.classList.remove('close')
    } else {
        $openYears.classList.add('close')
    }
})

const $yearList = document.querySelector('#year-list')
const $titleYear = document.querySelector('.educational-institution.years')
$yearList.addEventListener('click', (event) => {
    if (event.target.classList.contains('years')) { 
        const institutionYears = event.target.innerText
        $titleYear.innerText = institutionYears
        $openYears.classList.add('close')
        $yearList.classList.add('hide')
    }
})


