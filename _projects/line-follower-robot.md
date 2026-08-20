---
layout: project
title: Line Follower Robot
summary: An introductory robotics project covering mechanical design, electronics, PCB development, programming, assembly, and system integration.
role: Project Based Learning · Semester 1–2
stack: Robotics, Electronics, PCB Design, Programming
short: ROBOTICS
image: /assets/images/projects/line-follower/hero.jpg
url_external: "https://github.com/mosyrf/Line-Follower-Robot.git"
---

### Overview

The Line Follower Robot was developed as an introductory robotics project
to explore the integration of **mechanical design, electronics, PCB
development, programming, and system integration** into a single autonomous
robotic platform.

The project follows a complete development process, starting from mechanical
and electronic design, followed by circuit development, PCB layout, manual
PCB fabrication, component assembly, programming, wiring, and final system
testing.

The robot uses a **photodiode-based sensing system** to detect differences
in reflected light between the line and its surrounding surface. The
resulting sensor signals are processed through a **comparator circuit** and
then used by the control system to determine the appropriate motor response.

<figure class="project-hero-image">
  <img
    src="{{ '/assets/images/projects/line-follower/hero.jpg' | relative_url }}"
    alt="Line follower robot prototype"
  >
  <figcaption>
    Final prototype showing the completed mechanical assembly, electronic
    modules, drive system, and front-mounted sensor array.
  </figcaption>
</figure>

### Mechanical Design

The mechanical structure of the robot was designed digitally before
fabrication to determine the chassis dimensions, component placement,
wheel configuration, and mounting positions.

The **2D mechanical drawings were created using AutoCAD**, allowing the
dimensions and geometry of the chassis components to be defined accurately.
The design was then developed into a **3D model using Autodesk Fusion** to
visualize the complete assembly and verify the placement of mechanical and
electronic components before fabrication.

The mechanical design was prepared as a reference for the physical
fabrication and assembly process. The 3D model could also be exported in
**STP/STEP format**, providing a standardized CAD format for transferring
the design between compatible mechanical design and manufacturing software.

<figure class="project-diagram">
  <img
    src="{{ '/assets/images/projects/line-follower/mechanical-design.png' | relative_url }}"
    alt="2D and 3D mechanical design of the line follower robot"
  >
  <figcaption>
    Mechanical development of the line follower robot, from 2D dimensional
    drawings created in AutoCAD to the 3D assembly developed in Autodesk
    Fusion. The 3D model provides a reference for chassis dimensions,
    component placement, and physical assembly.
  </figcaption>
</figure>

### Development Process

The development of the line follower robot was carried out through several
stages. Each stage was used as a reference for the following stage, from
initial research and system planning to physical fabrication and testing.

**1. Research & Initial Design**

The project began with research into basic line-following robot concepts,
including line detection methods, motor control, electronic architecture,
and mechanical configuration.

The initial design focused on determining how the sensing system, control
electronics, motors, and mechanical structure would interact as one
integrated robotic system.

**2. Mechanical & Electronic Design**

The robot chassis and component arrangement were designed before physical
assembly.

The mechanical structure was developed using **AutoCAD for 2D drawings**
and **Autodesk Fusion for 3D modelling**. At the same time, the electronic
system was divided into several functional blocks consisting of the motor
driver, comparator circuit, and photodiode sensor array.

**3. Circuit Design & Verification**

The electronic circuits were developed and reviewed before moving to PCB
layout.

The motor driver, comparator, and photodiode sensor circuits were treated
as separate functional modules. Their power connections, signal paths,
component relationships, and output interfaces were checked before the
designs were transferred into PCB layouts.

**4. PCB Layout**

After the schematics were finalized, each circuit was translated into a
PCB layout using **Autodesk EAGLE**.

The boards were designed as **single-layer PCBs**, with component placement
and copper routing arranged to simplify fabrication, soldering, and physical
assembly.

**5. Manual PCB Fabrication**

The PCB layouts were fabricated manually rather than being manufactured by
a professional PCB service.

A **toner-transfer method** was used, in which the PCB pattern was printed
and transferred onto the copper surface using heat from an iron. The board
was then etched to remove the unwanted copper and leave the required
conductive traces.

**6. Component Assembly**

After fabrication, the PCBs were cleaned and inspected before component
installation.

Components were placed and **soldered manually**, followed by wiring and
integration of the electronic modules with the robot chassis, motors,
sensors, controller, and power supply.

**7. Programming & System Integration**

The assembled hardware was integrated with the control program.

The sensor signals were used as inputs for the line-following behavior,
while the motor driver provided the required interface between the control
signals and the two DC motors.

**8. Testing & Adjustment**

The completed robot was tested on the line-following track.

Sensor response, motor direction, wiring, and overall control behavior were
checked during testing. Adjustments were made where necessary to improve
the interaction between the sensor system, control circuit, and motors.

<figure class="project-diagram">
  <img
    src="{{ '/assets/images/projects/line-follower/development-flowchart.png' | relative_url }}"
    alt="Development process flowchart for the line follower robot"
  >
  <figcaption>
    Development workflow showing the progression from research and initial
    design through mechanical and electronic development, PCB layout,
    manual fabrication, component assembly, programming, integration,
    and final system testing.
  </figcaption>
</figure>

### Electronics & Circuit Design

The electronic system was designed using **Autodesk EAGLE** and divided
into several functional blocks to simplify development, testing, and
integration.

The main electronic subsystems consist of the **L298N motor driver,
LM339 comparator circuit, and photodiode sensor array**. Each circuit was
designed according to its specific function before being integrated into
the overall robot system.

#### Motor Driver

The motor driver circuit was designed around the **L298N**, using the
component datasheet as the primary reference for the motor control and
power connections.

The L298N acts as the interface between the control system and the robot's
DC motors. Since the control system cannot directly provide the current
required by the motors, the motor driver handles the higher-power motor
output while receiving control signals from the control circuit.

The circuit includes the motor supply, logic supply, control inputs,
enable connections, and outputs connected to the two DC motors.

<figure class="project-diagram">
  <img
    src="{{ '/assets/images/projects/line-follower/motor-driver-schematic.png' | relative_url }}"
    alt="L298N motor driver schematic"
  >
  <figcaption>
    Motor driver schematic designed in Autodesk EAGLE based on the L298N
    datasheet. The circuit provides the interface between the control
    signals and the two DC motors while handling the required motor supply,
    control inputs, and motor outputs.
  </figcaption>
</figure>

#### Comparator Circuit

The comparator circuit is responsible for converting the analog voltage
generated by the photodiode sensor into a threshold-based digital-like
signal that can be interpreted by the control system.

The circuit uses an **LM339 comparator**, which compares the sensor voltage
against a defined reference voltage. When the sensor voltage crosses the
selected threshold, the comparator changes its output state.

This allows the system to distinguish between different reflected-light
conditions and provide a suitable signal for the line-following control
system.

<figure class="project-diagram">
  <img
    src="{{ '/assets/images/projects/line-follower/comparator-schematic.png' | relative_url }}"
    alt="LM339 comparator circuit schematic"
  >
  <figcaption>
    Comparator circuit designed in Autodesk EAGLE using the LM339 to
    convert the photodiode sensor voltage into a threshold-based output
    signal for line detection.
  </figcaption>
</figure>

#### Photodiode Sensor

The line detection system uses multiple photodiodes to detect differences
in reflected light from the track surface.

Each photodiode is combined with a **voltage-divider circuit** to produce
a measurable voltage that varies according to the detected light intensity.

The resulting sensor voltage is then passed to the comparator circuit,
where it is compared against a reference threshold. This provides the
control system with information about the position of the line relative
to the sensor array.

<figure class="project-diagram">
  <img
    src="{{ '/assets/images/projects/line-follower/photodiode-schematic.png' | relative_url }}"
    alt="Photodiode sensor circuit schematic"
  >
  <figcaption>
    Photodiode sensor circuit using a voltage-divider configuration to
    convert changes in reflected light intensity into measurable voltage.
    Multiple sensor channels provide the line-position information used
    by the robot's control system.
  </figcaption>
</figure>

### PCB Layout & Fabrication

After the electronic schematics were completed, each circuit was converted
into a PCB layout using **Autodesk EAGLE**.

The project used **single-layer PCBs**, with component placement and copper
traces arranged to simplify manual fabrication and soldering.

The PCB layouts were prepared specifically for a manual fabrication
process, allowing the digital circuit designs to be transferred into
physical boards without relying on professional PCB manufacturing services.

#### Motor Driver PCB

<figure class="project-diagram">
  <img
    src="{{ '/assets/images/projects/line-follower/motor-driver-layout.png' | relative_url }}"
    alt="L298N motor driver PCB layout"
  >
  <figcaption>
    Single-layer PCB layout for the L298N motor driver, developed in
    Autodesk EAGLE. The layout organizes the motor driver components,
    power connections, control inputs, and motor outputs while keeping
    the routing suitable for manual PCB fabrication.
  </figcaption>
</figure>

#### Comparator PCB

<figure class="project-diagram">
  <img
    src="{{ '/assets/images/projects/line-follower/comparator-layout.png' | relative_url }}"
    alt="LM339 comparator PCB layout"
  >
  <figcaption>
    Single-layer PCB layout for the comparator circuit. The board was
    designed in Autodesk EAGLE with routing between the sensor inputs,
    comparator stage, reference circuit, and output connections.
  </figcaption>
</figure>

#### Photodiode Sensor PCB

<figure class="project-diagram">
  <img
    src="{{ '/assets/images/projects/line-follower/photodiode-layout.png' | relative_url }}"
    alt="Photodiode sensor PCB layout"
  >
  <figcaption>
    Single-layer PCB layout for the photodiode sensor module. Multiple
    sensor channels are arranged along the board to support the physical
    positioning required for line detection, with signal traces routed
    toward the comparator interface.
  </figcaption>
</figure>

### PCB Fabrication

The PCBs were fabricated manually using a **single-layer copper PCB and
toner-transfer technique**.

The PCB pattern generated from Autodesk EAGLE was printed and transferred
onto the copper surface using heat from an iron. After the toner was
transferred, the board was etched to remove the unwanted copper and leave
the required conductive traces.

The finished boards were then cleaned and inspected for broken or shorted
traces before being drilled and populated with the required components.

Components were subsequently installed and **soldered manually**, followed
by continuity checks and wiring to the other parts of the robotic system.

This process provided hands-on experience with the complete PCB workflow,
from **digital schematic and layout design to physical fabrication,
assembly, and testing**.

### Highlights

- **Mechanical Design** — Developed 2D mechanical drawings using AutoCAD and
  3D assembly models using Autodesk Fusion.
- **Electronics** — Designed the L298N motor driver, LM339 comparator, and
  photodiode sensor circuits.
- **PCB Development** — Translated electronic schematics into single-layer
  PCB layouts using Autodesk EAGLE.
- **PCB Fabrication** — Fabricated the boards manually using a
  toner-transfer / iron-based method.
- **Assembly** — Performed component placement, manual soldering, wiring,
  and hardware integration.
- **System Integration** — Integrated the sensing, control, motor driver,
  and mechanical subsystems into a functional robot.
- **Testing** — Tested sensor response, motor direction, wiring, and
  overall line-following behavior.

### Technologies

- **AutoCAD** — 2D mechanical design
- **Autodesk Fusion** — 3D mechanical modelling
- **Autodesk EAGLE** — Electronic schematic and PCB design
- **L298N** — DC motor driver
- **LM339** — Comparator
- **Photodiode** — Line detection sensor
- **Single-Layer PCB** — Manual PCB fabrication
- **Toner Transfer** — PCB fabrication method
- **Robotics** — System integration and control

### Project Context

This project was developed as part of **Project Based Learning** during
semesters one and two.

The project provided hands-on experience in the complete development cycle
of a small robotic system, covering mechanical modelling, electronic circuit
design, PCB development, manual fabrication, hardware assembly,
programming, system integration, and testing.
