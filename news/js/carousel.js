<!--
Core.widget.Carousel = (function(){
    var Dom = Core.Dom;
    var Event = Core.Event;
    var Builder = Core.Builder;
    var samplesContainer = Dom.get('carousel_container');
    var samplesList = Dom.get('samples_list');
    var photoContainer = Dom.get('carousel_photo_container');
    var photo = Dom.get('carousel_photo');
    var photoIntro = Dom.get('carousel_photo_intro');
    var BtnLastPhoto = Dom.get('carousel_btn_lastpic');
    var BtnNextPhoto = Dom.get('carousel_btn_nextpic');
    
    var samplesItems = samplesList.getElementsByTagName('a');
    var i, len = samplesItems.length;
    var samplesItemWidth = 170;
    var oneScreenItemsNum = parseInt(samplesContainer.offsetWidth, 10) / samplesItemWidth;
    var lastIndex = 0;
    var curIndex = 0;
    var movedGroups = 0;
    var groups = len < oneScreenItemsNum ? 0 : Math.ceil(len / oneScreenItemsNum) - 1;
    var samplesLeft = 0;
    var isVisited = [];
    var samplePhotos = [];
    var imgPath = [];
    var imgAlt = [];
    
    return {
        init: function(){
            var that = this, defaultPhoto = new Image();
            Dom.setStyle(samplesContainer, 'overflow', 'hidden');
            Dom.setStyle(samplesList, 'width', ((len * samplesItemWidth) + 'px'));
            for (i = 0; i < len; i += 1) {
                isVisited[i] = false;
                samplePhotos[i] = samplesItems[i].getElementsByTagName('img')[0];
                imgPath[i] = samplesItems[i].getAttribute('href');
                imgAlt[i] = samplesItems[i].getElementsByTagName('img')[0].getAttribute('alt');
                Event.addListener(samplesItems[i], 'click', function(index){
                    return function(event){
                        var evt = event || window.event;
                        curIndex = index;
                        that.focusSample();
                        that.chgPhoto();
                        Event.stopEvent(evt);
                    }
                }(i));
            }
            defaultPhoto.src = photo.src;
            this.autoSize.call(defaultPhoto);
            Event.addListener(BtnLastPhoto, 'click', this.lastPhotos);
            Event.addListener(BtnNextPhoto, 'click', this.nextPhotos);
        },
        lastPhotos: function(e){
            if (groups) {
                var evt = e || window.event;
                movedGroups -= 1;
                if (movedGroups < 0) {
                    movedGroups = groups;
                    Core.widget.Carousel.move(oneScreenItemsNum * groups);
                }
                else {
                    Core.widget.Carousel.move(-oneScreenItemsNum);
                }
                Event.stopEvent(evt);
            }
        },
        nextPhotos: function(e){
            if (groups) {
                var evt = e || window.event;
                movedGroups += 1;
                if (movedGroups > groups) {
                    movedGroups = 0;
                    Core.widget.Carousel.move(-oneScreenItemsNum * groups);
                }
                else {
                    Core.widget.Carousel.move(oneScreenItemsNum);
                }
                Event.stopEvent(evt);
            }
        },
        move: function(moveSteps){
            var left = 0;
            var sLeft = (samplesItemWidth * moveSteps);
            var timer = null;
            var scroll = function(){
                if (timer) {
                    clearTimeout(timer);
                }
                if (sLeft > 0) {
					left += 33.6;
					if (left > sLeft) {
						if (Core.lang.isMoz) {
							samplesLeft += sLeft;
							samplesContainer.scrollLeft = samplesLeft;
						}
						else {
							samplesLeft -= sLeft;
							Dom.setStyle(samplesList, 'left', (samplesLeft + 'px'));
						}
						return false;
					}
					else {
						if (Core.lang.isMoz) {
							samplesContainer.scrollLeft = samplesLeft + left;
						}
						else {
							Dom.setStyle(samplesList, 'left', (samplesLeft - left + 'px'));
						}
					}
				}
                else {
                    left -= 33.6;
                    if (left < sLeft) {
                        if (Core.lang.isMoz) {
                            samplesLeft += sLeft;
                            samplesContainer.scrollLeft = samplesLeft;
                        }
                        else {
                            samplesLeft -= sLeft;
                            Dom.setStyle(samplesList, 'left', (samplesLeft + 'px'));
                        }
                        return false;
                    }
                    else {
                        if (Core.lang.isMoz) {
                            samplesContainer.scrollLeft = samplesLeft + left;
                        }
                        else {
                            Dom.setStyle(samplesList, 'left', (samplesLeft - left + 'px'));
                        }
                    }
                }
                timer = setTimeout(scroll, 5);
            };
            scroll();
        },
        focusSample: function(){
            Dom.setStyle(samplePhotos[lastIndex], 'opacity', 1);
            Dom.setStyle(samplePhotos[curIndex], 'opacity', .4);
            lastIndex = curIndex;
        },
        chgPhoto: function(){
            var that = this;
            var tempImage = new Image();
            var shardow = null;
            tempImage.src = imgPath[curIndex];
            if (!isVisited[curIndex]) {
                photoContainer.appendChild(Builder.Node('div', {
                    id: 'carousel_photo_shardow'
                }));
                shardow = Dom.get('carousel_photo_shardow');
                shardow.style.height = photoContainer.offsetHeight + 'px';
                photoContainer.appendChild(Builder.Node('img', {
                    id: 'carousel_photo_loading',
                    src: 'images/loading.gif',
                    alt: 'loading'
                }));
                
            }
            if (tempImage.complete) {// Mozllia
                that.loadPhoto.call(tempImage);
            }
            else {// IE
                Event.addListener(tempImage, 'load', function(){
                    that.loadPhoto.call(tempImage);
                });
            }
        },
        loadPhoto: function(){
            Core.widget.Carousel.autoSize.call(this);
            photo.src = imgPath[curIndex];
            photoIntro.innerHTML = imgAlt[curIndex];
            isVisited[curIndex] = true;
            shardow = Dom.get('carousel_photo_shardow');
            loadingImg = Dom.get('carousel_photo_loading');
            if (shardow && loadingImg) {
                photoContainer.removeChild(shardow);
                photoContainer.removeChild(loadingImg);
            }
        },
        autoSize: function(){
            var width = this.width;
            var height = this.height;
            imgPercent = width / height;
            if (width > 930) {
                width = 930;
                height = (width / imgPercent);
            }
            Dom.setStyles(photo, {
                width: width + 'px',
                height: height + 'px'
            });
        }
    }
})();
Core.widget.Carousel.init();
//-->
