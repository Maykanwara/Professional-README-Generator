const fs = require('fs')
const { listenerCount } = require('process')

function renderLicense(answer) {

    switch (answer.license) {
        
        case 'IBM' :
            licenseBadge = '[Badge](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
            LicenseLink = '[IBM License Information](https://opensource.org/licenses/IPL-1.0)';
            break;
        case 'Mozilla' :
            licenseBadge = '[Badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
            LicenseLink = '[Mozilla License Information](https://img.shields.io/badge/License-Perl-0298c3.svg)(https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'Perl' :
            licenseBadge = '[Badge](https://img.shields.io/badge/License-Perl-0298c3.svg)';
            LicenseLink = '[Perl License Information](https://opensource.org/licenses/Artistic-2.0)';
            break;
        case 'SIL' :
            licenseBadge = '[Badge](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)';
            LicenseLink = '[SIL License Information](https://opensource.org/licenses/OFL-1.1)';
            break;
       
    }
}

function generateMarkdown(answer) {

    const readme = '# ${answer.title}

${licenseBadge}

## Description
---

}







