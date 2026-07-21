import { type Component } from 'solid-js';
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

import './Header.css';
import Enso from './Enso';
import EnsoMorph from './EnsoMorph';

export const Header: Component = () => {

  let bigEnsoEl: HTMLDivElement | undefined;

  const isEnsoVisible = createVisibilityObserver({
    threshold: 0.5,
  })(() => bigEnsoEl);

  return (
    <>
      <header classList={{
        small: true,
        hidden: isEnsoVisible(),
      }}>
        <a href="#top">
          <h1>
            <Enso />
            Lee<b>Goddard</b>
          </h1>
        </a>
      </header>

      <a id="top" />

      <header class="large">
        <EnsoMorph />

        <h1>Lee<b>Goddard</b></h1>
        <h2>Just another boring personal homepage</h2>

        <nav>
          <li>
            <a class="github" href='https://github.com/leegee' title="My GitHub page">
              <i class=" icon-github-circled" />
            </a>
          </li>
          <li>
            <a class='button' href='https://www.linkedin.com/in/leegoddard/' target="_blank" title="My LinkedIn page">Curriculum Vitae</a>
          </li>
          <li>
            <a class='button' href='https://www.linkedin.com/in/leegoddard/' target="_blank" title="Also my LinkedIn page">Resumé</a>
          </li>
        </nav>
      </header>
    </>
  );
};

