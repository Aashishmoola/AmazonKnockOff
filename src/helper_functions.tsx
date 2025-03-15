export {reformatString}

function reformatString(inpStr: string): string {
    return inpStr
      .split(" ")
      .map((inpSubStr) => {
        return inpSubStr.charAt(0).toUpperCase() + inpSubStr.slice(1);
      })
      .join(" ");
  }