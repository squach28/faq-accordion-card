const listElements = document.querySelectorAll('div.topic-header')

console.log(listElements)

listElements.forEach(element => {
    element.addEventListener('click', (e) => {
        deselectTopicHeaders()
        element.classList.add('topic-header-active')
        const arrowElement = element.children[1]
        const detailsElement = element.nextElementSibling
        if(detailsElement.classList.contains('hidden')) {
            detailsElement.classList.remove('hidden')
            detailsElement.classList.add('active')
            arrowElement.classList.add('arrow-up')
        } else {
            detailsElement.classList.remove('active')
            detailsElement.classList.add('hidden')
            arrowElement.classList.remove('arrow-up')
            element.classList.remove('topic-header-active')
        }
    })
})

function deselectTopicHeaders() {
    const topicHeaders = document.querySelectorAll('div.topic-header')
    topicHeaders.forEach(topicHeader => {
        const detailsElement = topicHeader.nextElementSibling
        const arrowElement = topicHeader.children[1]
        topicHeader.classList.remove('topic-header-active')
        detailsElement.classList.remove('active')
        detailsElement.classList.add('hidden')
        arrowElement.classList.remove('arrow-up')
    })
}
