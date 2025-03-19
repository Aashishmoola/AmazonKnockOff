export { reformatString, reformatStringForURL, undoReformatStringForURL };

function reformatString(inpStr: string, delimiter: string): string {
  return inpStr
    .split(" ")
    .map((inpSubStr) => {
      return inpSubStr.charAt(0).toUpperCase() + inpSubStr.slice(1);
    })
    .join(delimiter);
}

function reformatStringForURL(inpStr: string): string {
  return inpStr.replace(" ", "_");
}

function undoReformatStringForURL(inpStr: string): string {
  return inpStr.replace("_", " ");
}
