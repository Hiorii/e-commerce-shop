import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { getProductById, getAll } from '../../../redux/productsRedux';

const imageName = image => {
  if (image.startsWith('http')) {
    return image;
  } else {
    return '../' + image;
  }
};

const mapStateToProps = (state, props) => {
  const product = getProductById(state, props.match.params.productId);

  return {
    ...product,
    image: imageName(product.image),
    products: getAll(state),
  };
};

export default connect(mapStateToProps)(ProductPage);
