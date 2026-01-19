diff --git a//Users/owittj/Documents/Projects/MedLib/README.md b//Users/owittj/Documents/Projects/MedLib/README.md
new file mode 100644
--- /dev/null
+++ b//Users/owittj/Documents/Projects/MedLib/README.md
@@ -0,0 +1,28 @@
+# MedLib
+
+MedLib is a static medication library designed for medical students. It presents 20 core medications with image cards, key uses, duration, and caution notes, plus a quiz section for quick recall.
+
+## What this project uses
+- HTML templates in `templates/`
+- CSS styling in `static/css/styles.css`
+- JavaScript data + rendering in `static/js/script.js`
+- Local medication images in `static/images/`
+
+## How to run locally
+1) Start a local server from the project root:
+```bash
+python3 -m http.server 8000
+```
+2) Open the site in your browser:
+```
+http://localhost:8000/templates/welcome.html
+```
+
+## Images
+Place medication images in `static/images/` with these filenames:
+`amoxicillin.jpg`, `azithromycin.jpg`, `cephalexin.jpg`, `ibuprofen.jpg`, `acetaminophen.jpg`, `naproxen.jpg`,
+`lisinopril.jpg`, `losartan.jpg`, `metformin.jpg`, `insulin-glargine.jpg`, `atorvastatin.jpg`, `omeprazole.jpg`,
+`albuterol.jpg`, `cetirizine.jpg`, `diphenhydramine.jpg`, `sertraline.jpg`, `fluoxetine.jpg`, `warfarin.jpg`,
+`aspirin.jpg`, `clopidogrel.jpg`.
+
+If you use `.webp` files instead, update the image paths in `static/js/script.js` to match.
