export { reformatString, reformatStringForURL, undoReformatStringForURL, limitStringMaxLen };

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

function limitStringMaxLen(inpStr: string ,maxLen: number): string{
  const hardShortenedInpStr =  inpStr.slice(0, maxLen + 1)
  const softShortenedInpStr = inpStr.slice(0, hardShortenedInpStr.lastIndexOf(" "))
  return softShortenedInpStr
}