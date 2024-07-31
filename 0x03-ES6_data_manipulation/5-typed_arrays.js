export default function createInt8TypedArray(len, pos, val) {
  const buffer = new ArrayBuffer(len);
  const view = new DataView(buffer);

  if (pos < 0 || pos >= len) throw new Error('Position outside range');

  view.setInt8(pos, val);

  return view;
}
