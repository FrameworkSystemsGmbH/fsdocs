export default {
  // Markdig rendert Code-Blöcke mit abschließendem Zeilenumbruch, den der Copy-Button über innerText
  // mitkopiert. configureHljs läuft direkt vor dem Highlighting. Hier wird für alle Code-Blöcke, auch die,
  // die hljs überspringt (nohighlight, unbekannte Sprache), genau der letzte Umbruch entfernt.
  configureHljs: () => {
    document.querySelectorAll('pre code').forEach(el => {
      const last = el.lastChild;
      if (last?.nodeType === Node.TEXT_NODE)
        last.textContent = last.textContent.replace(/\r?\n$/, '');
    });
  }
}
