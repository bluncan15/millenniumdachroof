import { color_type, colors, thicknesses, suppliers, products } from './constants'

function find_by_id(array, id) {
  return array.find(it => it._id == id);
}

export function get_color_types(color_types) {
  let ct = [];
  color_type.map(c => {
    if (color_types.includes(c._id) === true) {
      ct.push(c);
    }
  })
  return ct;
};

export function get_colors_with_type(type) {
  let found = [];
  colors.map(c => {
    if (c.categories.includes(type)) {
      found.push(c);
    }
  });
  return colors;
}

export function get_thicknesses(thickness_ids) {
  let thickness = [];
  thicknesses.map(t => {
    if (thickness_ids.includes(t._id) === true) {
      thickness.push(t);
    }
  })
  return thickness;
}

export function get_thickness_by_id(id) {
  return find_by_id(thicknesses, id);
}

export function get_color_type_by_ids(ids) {
  let c = [];
  ids.map(id => {
    let x = find_by_id(color_type, id)
    if (x !== undefined) {
      c.push(x);
    }
  });
  return c;
}

export function get_product_by_id(id) {
  return find_by_id(products, id);
}

export function get_color_type_by_id(id) {
  return find_by_id(color_type, id);
}

export function get_color_by_id(id) {
  return find_by_id(colors, id);
}