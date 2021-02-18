import React from "react";
import {Tween} from "react-gsap";
import styles from "./Container.module.scss";
import NavBar from "./NavBar";

const ContainerFluid = ({ children, posts }) => {
  return (
    <div>
        <div className={styles.containerFluid}>
          <div className={'row'}>
            <div className={styles.right}>
              <NavBar posts={posts} />
            </div>
            <Tween from={{ opacity: 0, boxShadow: '0 0 0 rgba(0, 0, 0, 0)'}} duration={2} ease={'power2.inout'}>
              <div className={styles.left}>
                { children }
              </div>
            </Tween>
          </div>
        </div>
    </div>
  );
}

export default ContainerFluid;
