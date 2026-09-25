cmake_minimum_required(VERSION 3.16)

project(plasma-bitcoin)

find_package(ECM REQUIRED NO_MODULE)
set(CMAKE_MODULE_PATH ${ECM_MODULE_PATH} ${CMAKE_MODULE_DIR})

find_package(KF6 REQUIRED COMPONENTS
    I18n
    Plasma
)

include(KDEInstallDirs)
include(KDECMakeSettings)
include(KDECompilerSettings)

install(DIRECTORY package/
    DESTINATION ${KDE_INSTALL_DATADIR}/plasma/plasmoids/org.kde.plasma.bitcoinprice
)
