import fs from "node:fs";
import path from "node:path";
import { glob } from "glob";
import sharp from "sharp";

const CONFIG = {
	largeImages: {
		pattern: "src/assets/pexels-*.png",
		maxWidth: 1920,
		quality: 90,
	},
	teamPhotos: {
		pattern: "src/assets/*_watermark.{png,jpg}",
		maxWidth: 1200,
		quality: 90,
	},
	otherImages: {
		pattern: "src/assets/*.{png,jpg,jpeg}",
		maxWidth: 1600,
		quality: 90,
		exclude: ["pexels-", "_watermark"],
	},
};

async function getFileSizeInMB(filePath) {
	const stats = fs.statSync(filePath);
	return (stats.size / (1024 * 1024)).toFixed(2);
}

async function resizeImage(imagePath, maxWidth, quality) {
	const originalSize = await getFileSizeInMB(imagePath);
	const ext = path.extname(imagePath);
	const baseName = path.basename(imagePath, ext);
	const dir = path.dirname(imagePath);
	const outputPath = path.join(dir, `${baseName}_optimized.jpg`);

	if (fs.existsSync(outputPath)) {
		console.log(`⏭️  Skipping ${path.basename(imagePath)} (already optimized)`);
		return;
	}

	console.log(
		`📐 Processing ${path.basename(imagePath)} (${originalSize} MB)...`,
	);

	try {
		const image = sharp(imagePath);
		const metadata = await image.metadata();

		if (metadata.width <= maxWidth) {
			console.log(
				`   ℹ️  Image width ${metadata.width}px <= ${maxWidth}px, converting to JPEG only`,
			);
		}

		await image
			.resize(maxWidth, null, {
				withoutEnlargement: true,
				fit: "inside",
			})
			.jpeg({ quality, mozjpeg: true })
			.toFile(outputPath);

		const newSize = await getFileSizeInMB(outputPath);
		const savedMB = (originalSize - newSize).toFixed(2);
		const savedPercent = ((savedMB / originalSize) * 100).toFixed(1);

		console.log(
			`   ✓ Created optimized version: ${originalSize} MB → ${newSize} MB (saved ${savedMB} MB / ${savedPercent}%)`,
		);
		console.log(`   📦 Output: ${path.basename(outputPath)}`);
	} catch (error) {
		console.error(`   ❌ Error processing ${imagePath}:`, error.message);
		if (fs.existsSync(outputPath)) {
			fs.unlinkSync(outputPath);
		}
	}
}

async function processImageSet(config, label) {
	console.log(`\n${"=".repeat(60)}`);
	console.log(`🖼️  Processing ${label}`);
	console.log("=".repeat(60));

	const images = await glob(config.pattern);

	let filteredImages = images;
	if (config.exclude) {
		filteredImages = images.filter((img) => {
			return !config.exclude.some((exc) => img.includes(exc));
		});
	}

	if (filteredImages.length === 0) {
		console.log("No images found matching pattern.");
		return;
	}

	for (const imagePath of filteredImages) {
		await resizeImage(imagePath, config.maxWidth, config.quality);
	}
}

async function main() {
	console.log("🚀 Starting image optimization...\n");

	await processImageSet(CONFIG.largeImages, "Large Background Images");
	await processImageSet(CONFIG.teamPhotos, "Team Member Photos");
	await processImageSet(CONFIG.otherImages, "Other Images");

	console.log(`\n${"=".repeat(60)}`);
	console.log("✅ Image optimization complete!");
	console.log("=".repeat(60));
	console.log("\n💡 Optimized images saved with _optimized.jpg suffix");
	console.log(
		"   Original images remain untouched. Update your imports to use the optimized versions.",
	);
}

main().catch(console.error);
