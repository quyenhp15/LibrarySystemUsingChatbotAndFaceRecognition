from flask import Flask, render_template, Response
import face_recognition
import cv2
from simple_facerec import SimpleFacerec
import numpy as np
import os

app = Flask('__main__')

def generate_frames():
    sfr = SimpleFacerec()
    sfr.load_encoding_images("images/")

    camera = cv2.VideoCapture(0)

    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            face_locations, face_names = sfr.detect_known_faces(frame)
            for face_loc, name in zip(face_locations, face_names):
                y1, x1, y2, x2 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]

                cv2.putText(frame, name, (x1, y1 - 10), cv2.FONT_HERSHEY_DUPLEX, 1, (0,0,0), 2)
                cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 200), 2)

            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
        yield(b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/')
def index():
    return render_template('index.html', token='flask-react')

@app.route('/video')
def video():
    return Response(generate_frames(), content_type='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)