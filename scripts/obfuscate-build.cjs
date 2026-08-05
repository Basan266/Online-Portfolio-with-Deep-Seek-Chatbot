const fs = require("fs");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");

const projectRoot = path.resolve(__dirname, "..");
const sourceDirectory = path.join(projectRoot, "dist");
const outputDirectory = path.join(projectRoot, "dist-obfuscated");

if (!fs.existsSync(sourceDirectory)) {
    console.error(
        'Hindi nakita ang "dist" folder. Patakbuhin muna ang npm run build.'
    );
    process.exit(1);
}

// Delete old dist-obfuscated folder.
if (fs.existsSync(outputDirectory)) {
    fs.rmSync(outputDirectory, {
        recursive: true,
        force: true,
    });
}

// Copy the complete normal build first.
// This preserves index.html, CSS, images, fonts, and other assets.
fs.cpSync(sourceDirectory, outputDirectory, {
    recursive: true,
});

let obfuscatedFileCount = 0;

function obfuscateJavaScriptFiles(directory) {
    const entries = fs.readdirSync(directory, {
        withFileTypes: true,
    });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            obfuscateJavaScriptFiles(fullPath);
            continue;
        }

        if (!entry.isFile() || path.extname(entry.name) !== ".js") {
            continue;
        }

        console.log(`Obfuscating: ${path.relative(projectRoot, fullPath)}`);

        const originalCode = fs.readFileSync(fullPath, "utf8");

        const result = JavaScriptObfuscator.obfuscate(originalCode, {
            compact: true,

            // Balanced settings suitable for a Vite/React production build.
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.5,

            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.15,

            disableConsoleOutput: true,

            identifierNamesGenerator: "hexadecimal",
            numbersToExpressions: true,

            renameGlobals: false,
            selfDefending: false,
            simplify: true,

            splitStrings: true,
            splitStringsChunkLength: 8,

            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayEncoding: ["base64"],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayThreshold: 0.75,

            transformObjectKeys: true,
            unicodeEscapeSequence: false,
        });

        fs.writeFileSync(
            fullPath,
            result.getObfuscatedCode(),
            "utf8"
        );

        obfuscatedFileCount++;
    }
}

obfuscateJavaScriptFiles(outputDirectory);

console.log("");
console.log("Obfuscated build completed successfully.");
console.log(`JavaScript files processed: ${obfuscatedFileCount}`);
console.log(`Output folder: ${outputDirectory}`);