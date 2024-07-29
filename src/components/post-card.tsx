/* eslint-disable @next/next/no-img-element */
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div role="listitem" className="blog-item w-dyn-item">
      <div className="blog-container">
        <div className="blog-inner">
          <div className="blog-img">
            <img
              src="https://cdn.prod.website-files.com/620bcfdc511af7b26c628c0a/66a4eafcab07bc7970bf0341_thumb-small-last.png"
              loading="lazy"
              alt=""
              sizes="(max-width: 479px) 85vw, (max-width: 767px) 35vw, (max-width: 991px) 36vw, 20vw"
              srcSet="
                https://cdn.prod.website-files.com/620bcfdc511af7b26c628c0a/66a4eafcab07bc7970bf0341_thumb-small-last-p-500.png 500w,
                https://cdn.prod.website-files.com/620bcfdc511af7b26c628c0a/66a4eafcab07bc7970bf0341_thumb-small-last.png 572w
              "
              className="img big"
            />
          </div>
          <div className="blog-box">
            <div className="blog-head">
              <div className="blog-date">
                <div className="text eyebrow var">Jul, 2024</div>
              </div>
              <div className="blog-title">
                <h5 className="h-h5 var">{post.title}</h5>
              </div>
              <a
                rel="noopener"
                draggable="false"
                data-w-id="6ab8d580-8390-6478-0b40-3becf6e6dc8d"
                href="/blog/the-strategic-importance-of-grs-certification-in-the-footwear-industry"
                className="cta-link discover w-inline-block"
              >
                <div className="cta-inner w-clearfix">
                  <div className="cta-text discover">
                    <div className="text var small white">Discover</div>
                  </div>
                  <div className="cta-img">
                    <img
                      src="https://cdn.prod.website-files.com/620bb93b7e6991ab6e88d1bb/6214bdd6f7980d9c7c782eea_arrow.svg"
                      alt=""
                      className="img"
                    />
                  </div>
                </div>
                <div className="cta-bg" style={{}}></div>
              </a>
              <link
                rel="prerender"
                href="/blog/the-strategic-importance-of-grs-certification-in-the-footwear-industry"
              />
            </div>
            <div className="blog-desc">
              <div className="text var small">{post.summary}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
