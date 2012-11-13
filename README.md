# Scale.css
### Mobile first boilerplate focusing on readability

[Scale.css](http://viljamis.com/blog/2012/typography/) is a mobile first “boilerplate” that tries to make a good starting point for typography that looks balanced and easy-to-read on wide range of devices. It works from 200px and up and provides a set of Media Queries and Typographic Basic Styles. All proportions are based on The Chromatic Scale. If you want to learn more [read my post at viljamis.com](http://viljamis.com/blog/2012/typography/).

Scale.css in short: The first layout for feature phones is using 12px base font-size and there are max-width and horizontal centering for browsers that don’t support Media Queries. Then inside next Media Queries the whole layout starts to scale slightly bigger just by changing the body’s font-size. This works because EMs are always relative to the base font-size and Scale.css is using EMs everywhere instead of pixels.




Usage Instructions and demo
======

For demo go to [http://viljamis.com/blog/2012/typography/](http://viljamis.com/blog/2012/typography/)

Instructions, SASS template and more coming later...




Cheatsheet for math
======

    Pythagoras Intonation
    (3-limit Just Intonation)

    Note    Ratio             Pitch       Math

    B#      531441/524288     (1.01364)   3 12
    E#      177147/131072     (1.35152)   3 11
    A#      59049/32768       (1.80203)   3 10
    D#      19683/16384       (1.20135)   3 9
    G#      6561/4096         (1.60180)   3 8
    C#      2187/2048         (1.06787)   3 7
    F#      729/512           (1.42382)   3 6
    B       243/128           (1.89843)   3 5
    E       81/64             (1.26562)   3 4
    A       27/16             (1.6875)    3 3
    D       9/8               (1.125)     3 2
    G       3/2               (1.5)       3 1
    C       1                 (1)         3 0
    F       4/3               (1.33333)   3 -1
    Bb      16/9              (1.77777)   3 -2
    Eb      32/27             (1.18518)   3 -3
    Ab      128/81            (1.58024)   3 -4
    Db      256/243           (1.05349)   3 -5
    Gb      1024/729          (1.40466)   3 -6
    Cb      2048/2187         (0.93644)   3 -7
    Fb      8192/6561         (1.24859)   3 -8
    Bbb     32768/19683       (1.66478)   3 -9
    Ebb     65536/59049       (1.10985)   3 -10
    Abb     262144/177147     (1.47981)   3 -11
    Dbb     524288/531441     (0.98654)   3 -12

    Also: Font-sizes in percents (based on 16px/1em)
  
    75%       =   12px
    81.25%    =   13px
    87.5%     =   14px
    93.75%    =   15px
    100%      =   16px
    106.25%   =   17px
    112.5%    =   18px




Tested with
======


* Safari 5.1
* Chrome 16, 18
* Opera 11.6
* Opera Mobile 10.1
* Opera Mini 6.5
* Firefox 2, 3, 3.6, 6, 8
* Explorer 6, 7, 8 (works without Media Query support, support can be enabled with  [respond.js](https://github.com/scottjehl/Respond))
* Explorer 9
* Kindle 3
* iPhone 3GS + 4 (iOS Safari 4.3, 5)
* iPad 1, 2
* Nokia 6303i browser (240x320 screen)
* Huawei U8650 Android (+ Android 1.5 & 3.1 virtual devices)
* Samsung Omnia 7 (WP7.5)




License
======

Licensed under the MIT license.

Copyright (c) 2012 Viljami Salminen, http://viljamis.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




Want to do a pull request?
======

Great! New ideas are more than welcome, but please check the [Pull Request Guidelines](https://github.com/viljamis/Scale/wiki/Pull-Request-Guidelines) first before doing so.
