clickTab('tdz')
function clickTab(tab) {
    const tabs = ['tdz', 'mid', 'end']
    document.querySelectorAll('.button-tab-general').forEach((item, index) => {
        if (tab === tabs[index]) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
    document.querySelectorAll('.met-special-report--content__tab--main--content').forEach((item, index) => {
        if (tab === tabs[index]) {
            item.style.display = 'grid'
        } else {
            item.style.display = 'none'
        }
    })
}

let icaoIdenitifier = document.getElementById('icao-idenitifier').value
function getIcaoIdenitifier() {
    icaoIdenitifier = document.getElementById('icao-idenitifier').value
    updateTextArea()
}

let valueSelectMetReport = document.getElementById('select-met-report').value
function selectMetReport() {
    valueSelectMetReport = document.getElementById('select-met-report').value
    updateTextArea()
}

let menualInput = document.getElementById('menual-input').checked
function getMenualInput() {
    menualInput = document.getElementById('menual-input').checked
    updateTextArea()
}

let textArea = null
function updateTextArea() {
    let menualInput_ = ''
    if(menualInput) {
        menualInput_ =    menualInput = document.getElementById('menual-input').value
    }
    textArea = menualInput_ + valueSelectMetReport + icaoIdenitifier
    document.getElementById('preview-textarea').innerHTML = textArea
}

