export interface MajorCredits {
  credits: number;
  _majorCreditBrand: void;
}

export interface MinorCredits {
  credits: number;
  _minorCreditBrand: void;
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Examples
const math = { credits: 3 } as MajorCredits;
const history = { credits: 4 } as MajorCredits;
const art = { credits: 1 } as MinorCredits;
const music = { credits: 2 } as MinorCredits;

console.log(sumMajorCredits(math, history));
console.log(sumMinorCredits(art, music));
