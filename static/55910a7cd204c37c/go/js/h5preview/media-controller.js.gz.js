var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var VIDEO_CODEC='video/mp4; codecs="avc1.640029"',AUDIO_CODEC='audio/mp4; codecs="mp4a.40.2"';var FPS=24;var AUDIO_SAMPLE_RATE=44100;var AUDIO_FRONT_PADDING=2*1024/AUDIO_SAMPLE_RATE;var MediaController=function(){this.mediaSource=null;this.objectURL=null;this.videoSourceBuffer=null;this.audioSourceBuffer=null;this.audioBufferQueue=[];this.videoBufferQueue=[];this.containsAudio=true;this.mediaSourceReady=false;this.loadedAudioFragments=0;this.loadedVideoFragments=0;this.totalAudioFragments=0;this.totalVideoFragments=0;this.sourceOpened=false};function sourceOpenHandler(){if(this.sourceOpened){return}this.sourceOpened=true;this.createSourceBuffer();if(this.mediaSourceReadyHandler){this.mediaSourceReadyHandler()}}function getNextAudioSubFragmentIndex(c,d){var a=c.indexOf(d),b=c[a+1];return b}MediaController.prototype.createMedia=function(b){if(this.mediaSource){try{if(this.audioSourceBuffer){this.mediaSource.removeSourceBuffer(this.audioSourceBuffer)}this.mediaSource.removeSourceBuffer(this.videoSourceBuffer)}catch(a){}}this.audioBufferQueue=[];this.videoBufferQueue=[];this.containsAudio=b;this.mediaSource=new MediaSource();this.objectURL=URL.createObjectURL(this.mediaSource);this.sourceOpened=false;this.mediaSource.addEventListener("sourceopen",sourceOpenHandler.bind(this),false);return this.objectURL};MediaController.prototype.createSourceBuffer=function(){var a=this;this.videoSourceBuffer=this.mediaSource.addSourceBuffer(VIDEO_CODEC);this.videoSourceBuffer.addEventListener("updateend",function(){if(a.previewFragmentAddedHandler){a.previewFragmentAddedHandler()}a.tryHandleNextVideoFragment()},false);if(this.containsAudio){this.audioSourceBuffer=this.mediaSource.addSourceBuffer(AUDIO_CODEC);this.audioSourceBuffer.addEventListener("updateend",function(){if(a.previewFragmentAddedHandler){a.previewFragmentAddedHandler()}a.tryHandleNextAudioFragment()},false)}if(this.mediaDuration!==undefined){this.mediaSource.duration=this.mediaDuration;if(this.containsAudio){this.audioSourceBuffer.appendWindowEnd=this.mediaDuration}}if(this.initHandler){this.initHandler()}this.mediaSourceReady=true};MediaController.prototype.initPreview=function(b,e,a,c,d){this.mediaSourceReadyHandler=d;this.containsAudio=(e>0)?true:false;this.totalVideoFragments=b;if(this.containsAudio){this.totalAudioFragments=e}this.mediaDuration=c/FPS;this.loadedVideoFragments=0;this.loadedAudioFragments=0;this.nextAudioFragment=0;this._audioFragmentoffsets=a;return this.createMedia(this.containsAudio)};MediaController.prototype.addAudioFragment=function(a,e,c,d){var b=Math.floor(e);this.audioBufferQueue[b]={offset:e,buffer:a,length:c,noPadding:d};this.tryHandleNextAudioFragment()};MediaController.prototype.addAudioByRange=function(a,b){var d=this.totalAudioFragments,e=this.mediaDuration,f=b/d*e,c=e/d,g=Math.floor(f);this.audioBufferQueue[g]={offset:f,buffer:a,length:c,noPadding:true};this.tryHandleNextAudioFragment()};MediaController.prototype.addVideoFragment=function(a,b){this.videoBufferQueue.push({offset:b,buffer:a});this.tryHandleNextVideoFragment()};MediaController.prototype.tryHandleNextAudioFragment=function(){if(this.mediaSourceReady&&(this.audioSourceBuffer.updating!==true)){this.handleNextAudioFragment()}};MediaController.prototype.tryHandleNextVideoFragment=function(){if(this.mediaSourceReady&&(this.videoSourceBuffer.updating!==true)){this.handleNextVideoFragment()}};MediaController.prototype.handleNextAudioFragment=function(){if(this.audioBufferQueue[this.nextAudioFragment]){var a=this.audioBufferQueue[this.nextAudioFragment],c=a.offset,b=a.length,d=a.noPadding;if(!d){this.audioSourceBuffer.appendWindowEnd=c+b;this.audioSourceBuffer.appendWindowStart=c;this.audioSourceBuffer.timestampOffset=c-AUDIO_FRONT_PADDING}this.audioSourceBuffer.appendBuffer(a.buffer);this.loadedAudioFragments++;this.nextAudioFragment=getNextAudioSubFragmentIndex(this._audioFragmentoffsets,this.nextAudioFragment)}this._endOfStreamCheck()};MediaController.prototype.handleNextVideoFragment=function(){if(this.videoBufferQueue.length){var a=this.videoBufferQueue.shift();this.videoSourceBuffer.timestampOffset=a.offset;this.videoSourceBuffer.appendBuffer(a.buffer);this.loadedVideoFragments+=1}this._endOfStreamCheck()};MediaController.prototype.updateRecordForAudioRangeDownload=function(c){this._audioFragmentoffsets=[];for(var b=0;b<c;b++){var a=Math.floor(this.mediaDuration/c*b);this._audioFragmentoffsets.push(a)}this.nextAudioFragment=0;this.totalAudioFragments=c};MediaController.prototype._endOfStreamCheck=function(){if((this.loadedAudioFragments===this.totalAudioFragments)&&(this.loadedVideoFragments===this.totalVideoFragments)&&(!this.audioSourceBuffer||!this.audioSourceBuffer.updating)&&!this.videoSourceBuffer.updating&&(this.mediaSource.readyState!=="ended")){this.mediaSource.endOfStream();this.audioBufferQueue=[];if(this.previewCompleteHandler){this.previewCompleteHandler()}}};

}
/*
     FILE ARCHIVED ON 09:38:36 Jan 25, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:54:32 Feb 20, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.
     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 113.232
  exclusion.robots: 0.301
  exclusion.robots.policy: 0.289
  RedisCDXSource: 2.015
  esindex: 0.013
  LoadShardBlock: 79.601 (3)
  PetaboxLoader3.datanode: 135.355 (5)
  CDXLines.iter: 27.695 (3)
  load_resource: 160.672 (2)
  PetaboxLoader3.resolve: 38.835 (2)
*/
