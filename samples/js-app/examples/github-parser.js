// Этот скрипт выполняется в контексте браузера
function parseGithub() {
    const results = [];

    document.querySelectorAll('.Box-row').forEach(row => {
        results.push({
            title: row.querySelector('.h3')?.textContent?.trim() || '',
            url: row.querySelector('.h3 > a')?.href || '',
            description: row.querySelector('.col-9')?.textContent?.trim() || ''
        });
    });

    return results;
}

// Playwright автоматически вернет результат последнего выражения
parseGithub();
