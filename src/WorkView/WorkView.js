import React, { PropTypes } from 'react';
import classNames from 'classnames';


import Block3d from '../Block3d/Block3d';
import { SiteIntro } from '../SiteIntro/SiteIntro';
import { ProjectPreview } from '../ProjectPreview/ProjectPreview';


import { PandoraConsts } from '../Projects/Project-pandora';
import { ChristyNatsumiConsts } from '../Projects/Project-christynatsumi';



const WorkView = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired,
    handleScroll: PropTypes.func,
    scrollY: PropTypes.number
  },

  getInitialState() {
    return {
      routeTransition: null
    }
  },

  componentWillEnter(callback) {
    this.setState({routeTransition: 'intro'});
    setTimeout(() => {
      this.setState({routeTransition: null});
      callback();
    }, 600);
  },

  componentWillLeave(callback) {
    this.setState({routeTransition: 'outro'});
    setTimeout(() => {
      this.setState({routeTransition: null});
      callback();
    }, 600);
  },

  componentDidMount() {
    // set scroll position to where it was when user navigated away
    this.scrollableWrapper.scrollTop = this.props.scrollY;
  },

  render() {
    const App__body__scrollable__wrapper = classNames(
      'App__body__scrollable__wrapper', 'App__body__scrollable__wrapper--WorkView', {
        'App__body__scrollable__wrapper--intro': this.state.routeTransition === 'intro',
        'App__body__scrollable__wrapper--outro': this.state.routeTransition === 'outro'
      }
    );

    return (
      <div className='App__body'>
        <div className='App__body__scrollable' ref={(scrollableWrapper) => { this.scrollableWrapper = scrollableWrapper; }} onScroll={this.props.handleScroll}>
          <div className={App__body__scrollable__wrapper}>
            <div className='App__body__scrollable__wrapper__floor App__body__scrollable__wrapper__floor--WorkView'></div>
            <div className='App__body__scrollable__wrapper__leftFrame App__body__scrollable__wrapper__leftFrame--WorkView'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>
            <div className='App__body__scrollable__wrapper__rightFrame App__body__scrollable__wrapper__rightFrame--WorkView'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>


            <SiteIntro/>


            <ProjectPreview
              route={PandoraConsts.ROUTE}
              title={PandoraConsts.TITLE}
              snippet={PandoraConsts.SNIPPET}
              credits={PandoraConsts.CREDITS}
              thumbnailPath={PandoraConsts.THUMBNAIL_PATH}
            />

            <ProjectPreview
              route={ChristyNatsumiConsts.ROUTE}
              title={ChristyNatsumiConsts.TITLE}
              snippet={ChristyNatsumiConsts.SNIPPET}
              credits={ChristyNatsumiConsts.CREDITS}
              thumbnailPath={ChristyNatsumiConsts.THUMBNAIL_PATH}
            />

          </div>
        </div>
      </div>
    );
  }
});

export default WorkView;