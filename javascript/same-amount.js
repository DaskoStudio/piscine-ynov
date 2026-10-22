function sameAmount(str, regex1, regex2) {
  const countMatches = (regex) => {
    const flags = regex.flags.includes('g') ? regex.flags : regex.flags + 'g';
    const globalRegex = new RegExp(regex.source, flags);
    return (str.match(globalRegex) || []).length;
  };

  return countMatches(regex1) === countMatches(regex2);
}