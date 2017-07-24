import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';
import ProjectGroup from '../ProjectGroup/ProjectGroup';


export const Layout = React.createClass({
  propTypes: {
    isMobile: PropTypes.bool.isRequired
  },

  render() {
    return (
      <div className='ProjectView'>

        <div className='wrapper wrapper--centered'>
          <Block3d
            cssClass='ProjectView__title'
            width='100%'
            height='auto'
            depth='4'
            z='0'
            padding={[1.5,2.75,1.5,3]}
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <h1>{Content.TITLE}</h1>
          </Block3d>
        </div>


        <div className='ProjectView__picCol'>
          <Block3d
            cssClass='ProjectView__picCol__pic'
            width='100%'
            height='auto'
            depth='16'
            z='0'
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/christynatsumi/christynatsumi-1.jpg' alt='portfolio'/>
          </Block3d>

          <Block3d
            cssClass='ProjectView__picCol__pic'
            width='100%'
            height='auto'
            depth='16'
            z='0'
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/christynatsumi/christynatsumi-2.jpg' alt='portfolio'/>
          </Block3d>
        </div>


        <div className='ProjectView__textCol'>
          <ProjectNugget
            subhead={Content.NUGGET1__SUBHEAD}
            text={Content.NUGGET1__TEXT}
          />

          <ProjectNugget
            subhead={Content.NUGGET2__SUBHEAD}
            text={Content.NUGGET2__TEXT}
          />

          <ProjectNugget
            subhead={Content.NUGGET3__SUBHEAD}
            text={Content.NUGGET3__TEXT}
          />
        </div>





      /*

        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-mobile-1.jpg)'
          }}></div>
        </Block3d>

        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-mobile-2.jpg)'
          }}></div>
        </Block3d>


        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-mobile-3.jpg)'
          }}></div>
        </Block3d>

        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-mobile-4.jpg)'
          }}></div>
        </Block3d>

        <br/>

        <Block3d cssClass='ProjectView__pic' depth='14' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '33rem',
            height: '27.5rem',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-3.jpg)'
          }}></div>
        </Block3d>

        */

      </div>
    );
  }
});


export const Content = Object.freeze({
  ROUTE: '/project/christynatsumi',
  EXTERNAL_URL: 'https://christynatsumi.com',

  PREVIEW_TITLE: 'Christy Natsumi',
  PREVIEW_SNIPPET: 'A San Francisco based independent design studio that creates modern jewelry essentials. I design, build, and maintain all of the site\'s front-end, adding updates regularly in my spare time. I also shoot most of the photography.',
  PREVIEW_THUMBNAILPATH: 'work/christynatsumi/tn.jpg',

  TITLE: 'Christy Natsumi',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'I collaborate closely with founder and jewelry designer Christy Natsumi to help showcase her work in the most effective way. Because it\'s a small business, I touch every part of the process, from sketching wireframes to implementing the final layout and photos.',
  NUGGET2__SUBHEAD: 'Role',
  NUGGET2__TEXT: '<b>Front-end Engineer</b> - UI, Squarespace API integration<br/><b>Designer</b> - Site, branding, promotionals<br/><b>Photographer</b>',
  NUGGET3__SUBHEAD: 'Technologies',
  NUGGET3__TEXT: 'Javascript, CSS/LESS, HTML templating<br/>Photoshop<br/>Illustrator<br/>Sony A7 Mirrorless DSLR',

  INTERACTION_DESIGN__SUBHEAD: 'Interaction Design',
  INTERACTION_DESIGN__DESC: 'Elegant animations and meaningful interaction design is a challenge that requires both an eye for design and an understanding of technical implementation. In a React application, where direct DOM manipulation is avoided, this can be especially difficult. The journey was exciting, though, and by iterating closely with our other product designers, I believe we arrived at some effective solutions. Take a look!',
  INTERACTION_DESIGN__VIDEOPATH: 'https://player.vimeo.com/video/226627838',
  INTERACTION_DESIGN__WEBVIDEORATIO: 39.2,
  INTERACTION_DESIGN__MOBILEVIDEORATIO: 60,
});
