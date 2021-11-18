function generateMarkdown(data) { 
  return `# ${data.title}



Project Description: ${data.description}

Project Installation: \`\`\`${data.installation}\`\`\`

Project Usage: ${data.usage}

Project Contributing: ${data.contributing}

Project Tests: ${data.tests}

Project License: ${data.license}




`;
}

module.exports = generateMarkdown;