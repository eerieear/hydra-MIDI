{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // color controls with first three knobs\
noise(()=>cc[0]*3,()=>cc[1]/-8).color( ()=>cc[16], ()=>cc[17], ()=>cc[18] )\
.add(src(o0).scale(1.2).kaleid(100),()=>cc[5])\
.blend(src(o0).scale(1.1),()=>cc[6])\
.add(src(o0).scale(1.01),()=>cc[7])\
.posterize(()=>cc[4]*15+3,2)\
  .out()\
\
//on the console\
\
// register WebMIDI\
navigator.requestMIDIAccess()\
    .then(onMIDISuccess, onMIDIFailure);\
\
function onMIDISuccess(midiAccess) \{\
    console.log(midiAccess);\
    var inputs = midiAccess.inputs;\
    var outputs = midiAccess.outputs;\
    for (var input of midiAccess.inputs.values())\{\
        input.onmidimessage = getMIDIMessage;\
    \}\
\}\
\
function onMIDIFailure() \{\
    console.log('Could not access your MIDI devices.');\
\}\
\
//create an array to hold our cc values and init to a normalized value\
var cc=Array(128).fill(0.5)\
\
getMIDIMessage = function(midiMessage) \{\
    var arr = midiMessage.data    \
    var index = arr[1]\
    //console.log('Midi received on cc#' + index + ' value:' + arr[2])    // uncomment to monitor incoming Midi\
    var val = (arr[2]+1)/128.0  // normalize CC values to 0.0 - 1.0\
    cc[index]=val\
\}\
\
hush()\
\
\
\
\
\
}