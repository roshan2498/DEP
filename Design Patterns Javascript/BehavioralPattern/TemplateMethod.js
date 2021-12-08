// Template method defines the skeleton of how certain algorithm could be performed but defers the implementation of those steps of the children classes.

class Builder {
    build() {
        this.test();
        this.lint();
        this.assemble();
        this.deploy();
    }
}

class AndroidBuilder extends Builder {
    test() {
        console.log('Running android tests...');
    }

    lint() {
        console.log('Linting the android code...');
    }
    assemble() {
        console.log('Assembling the android build...');
    }
    deploy() {
        console.log('Deploying android build to server...')
    }
}

class IosBuilder extends Builder {
    test() {
        console.log('Running ios tests');
    }

    lint() {
        console.log('Linting the ios code...');
    }
    assemble() {
        console.log('Assembling the ios build...');
    }
    deploy() {
        console.log('Deploying ios build to server...')
    }
}

// usage

const androidBuilder = new AndroidBuilder();
androidBuilder.build();

/*
Running android tests...
Linting the android code...
Assembling the android build...
Deploying android build to server...
*/

const iosBuilder = new IosBuilder();
iosBuilder.build();

/*
Running ios tests
Linting the ios code...
Assembling the ios build...
Deploying ios build to server...
*/