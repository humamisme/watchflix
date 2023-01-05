export default function combineClasses(...classes) {
  return classes.join(' ').replace(/\s+/gm, ' ').trim();
}