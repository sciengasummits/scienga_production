const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        filelist = walkSync(path.join(dir, file), filelist);
      }
    }
    else {
      if (file.endsWith('.js') || file.endsWith('.jsx')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const allFiles = walkSync('src');

const replacements = [
  { search: /LIUTEX SUMMIT/g, replace: 'ADVANCENANO SUMMIT' },
  { search: /LIUTEXSUMMIT2026/g, replace: 'ADVANCENANOSUMMIT2026' },
  { search: /LIUTEX2026/g, replace: 'ADVANCENANOSUMMIT2026' },
  { search: /liutex2026/g, replace: 'advancenanosummit2026' },
  { search: /LIUTEX THEORY AND TURBULENCE MECHANISMS/g, replace: 'ADVANCED NANOTECHNOLOGY AND MATERIALS SCIENCE' },
  { search: /LIUTEX THEORY AND TURBULENCE MECHANISM/g, replace: 'ADVANCED NANOTECHNOLOGY AND MATERIALS SCIENCE' },
  { search: /LIUTEX THEORY \& TURBULENCE MECHANISM/g, replace: 'ADVANCED NANOTECHNOLOGY & MATERIALS SCIENCE' },
  { search: /INTERNATIONAL CONFERENCE ON LIUTEX THEORY AND APPLICATIONS IN VORTEX IDENTIFICATION AND VORTEX DYNAMICS/g, replace: 'ADVANCED NANO SUMMIT 2026' },
  { search: /contact@liutexvortexsummit\.com/g, replace: 'contact@advancematerialssummit.com' },
  { search: /liutexvortexsummit\.com/g, replace: 'advancematerialssummit.com' },
  { search: /liutex@sciengasummits\.com/g, replace: 'advancenano@sciengasummits.com' },
  { search: /Liutex Theory and Applications in Vortex Identification and Vortex Dynamics/g, replace: 'Advanced Materials & Nanotechnology' },
  { search: /Outram, Singapore/g, replace: 'Amsterdam, Netherlands' },
  { search: /Singapore/g, replace: 'Amsterdam, Netherlands' },
  { search: /conference: (conf = |')liutex/g, replace: "conference: $1advancenano" },
  { search: /conference = 'liutex'/g, replace: "conference = 'advancenano'" },
  { search: /Liutex Theory, Turbulence Mechanism, CFD, and AI in flow field analysis/g, replace: 'Nanomaterials, Graphene, Nanoelectronics, and Nanobiotechnology' },
  { search: /LIUTEX/g, replace: 'ADVANCENANO' }
];

let changedCount = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  for (const {search, replace} of replacements) {
    newContent = newContent.replace(search, replace);
  }
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changedCount++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Updated ${changedCount} files.`);
