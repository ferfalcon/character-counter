const textArea = document.getElementById('text-area')
const charDisplay = document.querySelector('[data-char-display]')
const wordDisplay = document.querySelector('[data-word-display]')
const sentenceDisplay = document.querySelector('[data-sentence-display]')

processText()
textArea.addEventListener('input', processText)

function processText()
{
	const trimmedString = textArea.value.trim()
	let charCount = trimmedString.length
	let wordCount, sentenceCount

	if (!charCount)
	{
		wordCount = 0
		sentenceCount = 0
	}
	else
	{
		wordCount = trimmedString.split(' ').length
		sentenceCount = trimmedString.split('.').length
	}

	charDisplay.innerHTML = charCount
	wordDisplay.innerHTML = wordCount
	sentenceDisplay.innerHTML = sentenceCount
}
