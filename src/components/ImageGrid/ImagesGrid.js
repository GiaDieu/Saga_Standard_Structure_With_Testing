import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../actions';
import Button from '../shared/Button';
import ImageCard from '../ImageCard';
import './style.css';

class ImagesGrid extends Component {
  render() {
    const { Images, isLoading, error, loadImages, imageStats } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {Images.map((image) => (
            <ImageCard key={image.id} image={image} imageStats={imageStats} />
          ))}
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>
          Load More
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, Images, error, imageStats }) => {
  return { isLoading, Images, error, imageStats };
};

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesGrid);
